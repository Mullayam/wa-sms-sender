import { AppLayout } from "@/components/layouts/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
              Welcome to Happift
              <br className="hidden sm:inline" /> Buy & Sell Variety of Gift
              Cards at the lower Rates
            </h1>
            <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              Don&apos;t miss out on savings when you shop on Amazon or
              Flipkart. Buy discounted gift cards from our website and enjoy
              even more value for your money. Or sell your unused cards to
              declutter and earn some cash. It&apos;s easy, safe, and
              convenient. Try it now.
            </p>
          </div>
          <div className="flex gap-4">
            {/* <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Cards
          </Link> */}
          </div>
        </section>
      </section>
    </AppLayout>
  );
}
