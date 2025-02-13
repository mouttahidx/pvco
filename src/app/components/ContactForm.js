"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, FileInput, Loader, TextInput } from "@mantine/core";
import { hasLength, isEmail, isNotEmpty, useForm } from "@mantine/form";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { FaFileUpload } from "react-icons/fa";

export default function ContactForm({
  translations,
  theme = "light",
  subject = "Contact",
}) {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef("");
  const [error, setError] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  async function sendEmail(data) {
    const res = await axios.post("/api/contact", {
      ...data,
      subject,
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
        additional_infos: "",
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
          variant="filled"
          withAsterisk
          size="md"
          radius={"xl"}
          placeholder={translations["name"]}
          {...form.getInputProps("name")}
          styles={{
            error: {
              color: "white",
            },
          }}
          className="col-span-2 placeholder-shown:!text-black"
          classNames={{ input: "textInput" }}
        />

        <TextInput
          variant="filled"
          size="md"
          radius={"xl"}
          withAsterisk
          type="tel"
          placeholder="+1 123 456 789"
          {...form.getInputProps("phone")}
          styles={{
            error: {
              color: "white",
            },
          }}
          classNames={{ input: "textInput" }}
        />

        <TextInput
          variant="filled"
          size="md"
          radius={"xl"}
          withAsterisk
          placeholder="Exemple@email.com"
          {...form.getInputProps("email")}
          styles={{
            error: {
              color: "white",
            },
          }}
          classNames={{ input: "textInput" }}
        />

        <TextInput
          variant="filled"
          size="md"
          radius={"xl"}
          placeholder={translations["additional_infos"]}
          {...form.getInputProps("additional_infos")}
          className="md:col-span-2"
          styles={{
            error: {
              color: "white",
            },
          }}
          classNames={{ input: "textInput" }}
        />
        <ReCAPTCHA
          siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
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
