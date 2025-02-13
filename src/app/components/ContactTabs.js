"use client";
import { Tabs } from "@mantine/core";
import ContactForm from "./ContactForm";
import QuoteForm from "./QuoteForm";

export default function ContactTabs({ translations }) {
  return (
    <Tabs defaultValue="first" radius={"xl"} color="#FD6941" variant="pills" className="shadow rounded-3xl">
      <Tabs.List  justify="center">
        <Tabs.Tab value="first">Demande de soumission</Tabs.Tab>
        <Tabs.Tab value="second">Service après-vente</Tabs.Tab>
        <Tabs.Tab value="third">Nous contacter</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">
        <section className="p-8 py-16 max-w-4xl mx-auto">
          <QuoteForm translations={translations} theme={"dark"} />
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="second">
        <section className="p-8 py-16 max-w-4xl mx-auto">
          <ContactForm
            translations={translations}
            theme={"dark"}
            subject="Service après-vente"
          />
        </section>
      </Tabs.Panel>

      <Tabs.Panel value="third">
        <section className="p-8 py-16 max-w-4xl mx-auto">
          <ContactForm translations={translations} theme={"dark"} />
        </section>
      </Tabs.Panel>
    </Tabs>
  );
}
