"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, FileInput, Loader, Select, TextInput } from "@mantine/core";
import { hasLength, isEmail, isNotEmpty, useForm } from "@mantine/form";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { FaFileUpload } from "react-icons/fa";

export default function QuoteForm({ translations, theme = "light" }) {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef("");
  const [error, setError] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const cvRef = useRef();
  let blob = null;

  async function sendEmail(data) {
    const res = await axios.post("/api/quote", {
      ...data,
      fileAttached: blob,
    });

    if (res.status == 200) {
      return true;
    }

    return false;
  }

  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      poste: "",
      service: "",
      additional_infos: "",
    },
    validate: {
      name: hasLength({ min: 3, max: 156 }, translations["name_error"]),
      email: isEmail(translations["email_error"]),
      phone: (value) =>
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
          value
        )
          ? null
          : translations["phone_error"],
      service: isNotEmpty(translations["required_error"]),
    },
  });

  function changed(value) {
    recaptchaRef.current = value;
  }

  async function send(values) {
    let res = await sendEmail(values);
    if (res) {
      form.setValues({
        name: "",
        phone: "",
        email: "",
        poste: "",
        additional_infos: "",
        service: "",
      });

      setError(false);
      toast.success(translations["email_success"]);
      setLoading(false);

      // router.push("/thank-you");
      return true;
    }
    setLoading(false);

    return false;
  }

  return (
    <div className="w-full mx-auto rounded-sm relative" id="contact">
      {loading && (
        <div className="absolute top-0 left-0 z-50 h-full bg-white bg-opacity-70 flex justify-center items-center w-full">
          <Loader color="black" size="xl" />
        </div>
      )}
      <form
        onSubmit={form.onSubmit(async (values) => {
          setLoading(true);
          if (cvRef.current) {
            const file = cvRef.current[0];
            const response = await fetch(`/api/upload?filename=${file.name}`, {
              method: "POST",
              body: file,
            });

            const newBlob = await response.json();
            blob = { file: newBlob.url, pathname: newBlob.pathname };
          }

          if (!recaptchaRef.current) {
            toast.error(translations["recaptcha_error"]);
            setLoading(false);
            return false;
          }

          try {
            send(values);
          } catch (error) {}
        })}
        className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-1 lg:gap-x-4 gap-y-4"
      >
        <TextInput
          classNames={{ input: "textInput" }}
          variant="filled"
          withAsterisk
          size="md"
          radius={"xl"}
          placeholder={translations["name"]}
          {...form.getInputProps("name")}
          styles={{
            error: {
              color: theme === "light" ? "white" : "red",
            },
          }}
        />

        <TextInput
          classNames={{ input: "textInput" }}
          variant="filled"
          size="md"
          radius={"xl"}
          withAsterisk
          type="tel"
          placeholder="+1 123 456 789"
          {...form.getInputProps("phone")}
          styles={{
            error: {
              color: theme === "light" ? "white" : "red",
            },
          }}
        />

        <TextInput
          classNames={{ input: "textInput" }}
          variant="filled"
          size="md"
          radius={"xl"}
          withAsterisk
          placeholder="Exemple@email.com"
          {...form.getInputProps("email")}
          styles={{
            error: {
              color: theme === "light" ? "white" : "red",
            },
          }}
        />

        <Select
          size="md"
          classNames={{ input: "textInput" }}
          variant="filled"
          radius={"xl"}
          withAsterisk
          placeholder={"Type de service"}
          styles={{
            error: {
              color: theme === "light" ? "white" : "red",
            },
          }}
          {...form.getInputProps("service")}
          data={[
            { label: "Portes", value: "portes" },
            { label: "Portes de garage", value: "Portes de garage" },
            { label: "Fenêtres", value: "Fenêtres" },
            { label: "Balcons et rampes", value: "Balcons et rampes" },
            { label: "Solariums", value: "Solariums" },
            {
              label: "Revêtements d'extérieurs",
              value: "Revêtements d'extérieurs",
            },
            { label: "Accessoires", value: "Accessoires" },
          ]}
        />

        <FileInput
          variant="filled"
          placeholder="Sélectionnez des fichiers"
          accept="document/pdf,document/docx"
          leftSection={<FaFileUpload />}
          multiple
          clearable
          radius={"xl"}
          size="md"
          className="md:col-span-2 !text-black"
          styles={{
            error: {
              color: theme === "light" ? "white" : "red",
            },
          }}
          classNames={{ input: "textInput" }}
          onChange={(e) => {
            cvRef.current = e;
          }}
        />
        <TextInput
          classNames={{ input: "textInput" }}
          variant="filled"
          size="md"
          radius={"xl"}
          placeholder={translations["additional_infos"]}
          {...form.getInputProps("additional_infos")}
          className="md:col-span-2"
          styles={{
            error: {
              color: theme === "light" ? "white" : "red",
            },
          }}
        />
        <ReCAPTCHA
          siteKey={env.process.RECAPTCHA_KEY}
          onChange={(token) => {
            changed(token || "");
          }}
          className="h-fit block w-full md:col-span-2"
        />

        <Button
          type="submit"
          size="md"
          radius={"xl"}
          className="disabled:cursor-wait md:col-span-2 bg-primary mx-auto hover:bg-dark-secondary text-white hover:text-primary duration-500 !rounded-full"
          disabled={loading}
          variant="outline"
          color={theme === "light" ? "white" : "#FD6941"}
          onClick={() => {
            console.log(form.getValues());
          }}
        >
          {translations["send"]}
          <FaArrowRight className="ml-2" />
        </Button>
      </form>

      <ToastContainer />
    </div>
  );
}
