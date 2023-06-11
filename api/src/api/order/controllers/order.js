"use strict";

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    // Caso de erro, há possibilidade de estar nessa parte do código (verificar vídeo)
    const lineItems = await Promise.all(
      products.map(async (produto) => {
        const item = await strapi
          .service("api::produto.produto")
          .findOne(produto.id);

        // Verificar a questão da quantidade, tirar o comentário pra ver se funcionará
        return {
          quantity: item.quantity,
          price_data: {
            currency: "BRL",
            product_data: {
              name: item.titulo,
            },
            unit_amount: item.preco * 100,
          },
        };
      })
    );

    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["BR"] },
        payment_method_types: ["card"],
      });

      await strapi.service("api::order:order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (err) {
      ctx.response.status = 500;
      return err;
    }
  },
}));
