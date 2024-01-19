const { z } = require('zod');

const envSchema = z.object({
  POSTGRES_PRISMA_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'staging', 'production'])
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error('❌ Invalid environment variables:', JSON.stringify(env.error.format(), null, 4));
  process.exit(1);
}
module.exports.env = env.data;
