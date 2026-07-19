"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Loader2, X } from "lucide-react";

interface GetInTouchForm {
  name: string;
  companyName: string;
  companyWebsite: string;
  phoneNumber: string;
  companySize: string;
  description: string;
  departments: string[];
}

interface GetInTouchModalContextValue {
  openGetInTouch: () => void;
}

const GetInTouchModalContext = createContext<GetInTouchModalContextValue | null>(null);

const departments = [
  { id: "finance", label: "Finance", wave: "Wave One", available: true },
  { id: "hr", label: "HR", wave: "Wave One", available: true },
  { id: "marketing", label: "Marketing", wave: "Wave Two", available: false },
  { id: "it", label: "IT", wave: "Wave Two", available: false },
];

const initialForm: GetInTouchForm = {
  name: "",
  companyName: "",
  companyWebsite: "",
  phoneNumber: "",
  companySize: "",
  description: "",
  departments: [],
};

export function useGetInTouchModal() {
  const context = useContext(GetInTouchModalContext);

  if (!context) {
    throw new Error("useGetInTouchModal must be used inside GetInTouchModalProvider");
  }

  return context;
}

export function GetInTouchModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDepartmentListOpen, setIsDepartmentListOpen] = useState(false);
  const [form, setForm] = useState<GetInTouchForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "unset";
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const openGetInTouch = () => {
    setStatus("idle");
    setIsDepartmentListOpen(false);
    setIsOpen(true);
  };

  const closeGetInTouch = () => {
    setIsOpen(false);
    setIsDepartmentListOpen(false);
  };

  const updateForm = (field: keyof Omit<GetInTouchForm, "departments">) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const toggleDepartment = (departmentId: string) => {
    setForm((current) => ({
      ...current,
      departments: current.departments.includes(departmentId)
        ? current.departments.filter((id) => id !== departmentId)
        : [...current.departments, departmentId],
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.departments.length) return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("submitted"), 700);
  };

  return (
    <GetInTouchModalContext.Provider value={{ openGetInTouch }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#15122E]/55 px-4 py-6 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeGetInTouch();
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="get-in-touch-title"
              className="relative max-h-[calc(100vh-3rem)] w-full max-w-[620px] overflow-y-auto rounded-[28px] bg-white p-6 shadow-[0_24px_100px_rgba(21,18,46,0.28)] sm:p-8"
            >
              <button
                type="button"
                aria-label="Close Get In Touch form"
                onClick={closeGetInTouch}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#15122E]/5 text-[#15122E] transition-colors hover:bg-[#6C63FF]/10 hover:text-[#4F46E5]"
              >
                <X className="h-5 w-5" />
              </button>

              {status === "submitted" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center px-4 py-12 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#6C63FF]/10">
                    <Check className="h-8 w-8 text-[#4F46E5]" strokeWidth={3} />
                  </div>
                  <h2 className="font-onest text-3xl font-semibold tracking-[-1px] text-[#15122E]">We&apos;ll be in touch.</h2>
                  <p className="mt-3 max-w-[420px] font-['DM_Sans'] text-base leading-7 text-[#15122E]/65">
                    Thanks for telling us where your business needs help. We&apos;ll follow up with the right next step for your team.
                  </p>
                  <button
                    type="button"
                    onClick={closeGetInTouch}
                    className="mt-8 rounded-full bg-[#15122E] px-6 py-3 font-poppins text-sm font-semibold text-white transition-colors hover:bg-[#4F46E5]"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="grid lg:grid-cols-[0.84fr_1.16fr]">
                  <aside className="hidden lg:flex flex-col justify-between bg-[#15122E] px-8 py-8 xl:px-10 xl:py-10 text-white">
                    <div>
                      <div className="flex items-center gap-3">
                        <img src="/purplelogowobg.png" alt="Nexus AI First logo" className="h-10 w-auto" />
                        <div>
                          <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.35em] text-white/50">
                            Nexus AI First
                          </p>
                          <p className="mt-1 font-onest text-[24px] font-semibold tracking-[-0.8px] text-white">
                            Company-branded rollout.
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 max-w-[360px] font-['DM_Sans'] text-[15px] leading-[1.7] text-white/72">
                        Tell us the company website, phone number, and the departments you want to make more agentic.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        "Goal first, approval led.",
                        "Built in your branded environment.",
                        "Finance and HCM from one system.",
                      ].map((label) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4">
                          <p className="font-poppins text-[11px] font-bold uppercase tracking-[0.28em] text-white/42">{label}</p>
                        </div>
                      ))}
                    </div>
                  </aside>

                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10">
                    <div className="max-w-[560px] pr-12">
                      <p className="font-poppins text-xs font-semibold uppercase tracking-[0.18em] text-[#6C63FF]">Get in touch</p>
                      <h2 id="get-in-touch-title" className="mt-2 font-onest text-3xl font-semibold leading-tight tracking-[-1px] text-[#15122E] sm:text-4xl">
                        Tell us where the work is.
                      </h2>
                      <p className="mt-3 font-['DM_Sans'] text-base leading-6 text-[#15122E]/65">
                        Share a little about your business and the departments you want to make more agentic.
                      </p>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block font-poppins text-sm font-semibold text-[#15122E]">Name *</span>
                        <input
                          required
                          value={form.name}
                          onChange={updateForm("name")}
                          placeholder="Your name"
                          className="h-12 w-full rounded-xl border border-[#15122E]/15 bg-white px-4 font-['DM_Sans'] text-[#15122E] outline-none transition-all placeholder:text-[#15122E]/35 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/15"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block font-poppins text-sm font-semibold text-[#15122E]">Company name *</span>
                        <input
                          required
                          value={form.companyName}
                          onChange={updateForm("companyName")}
                          placeholder="Your company"
                          className="h-12 w-full rounded-xl border border-[#15122E]/15 bg-white px-4 font-['DM_Sans'] text-[#15122E] outline-none transition-all placeholder:text-[#15122E]/35 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/15"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block font-poppins text-sm font-semibold text-[#15122E]">Company website *</span>
                        <input
                          required
                          type="url"
                          value={form.companyWebsite}
                          onChange={updateForm("companyWebsite")}
                          placeholder="https://yourcompany.com"
                          className="h-12 w-full rounded-xl border border-[#15122E]/15 bg-white px-4 font-['DM_Sans'] text-[#15122E] outline-none transition-all placeholder:text-[#15122E]/35 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/15"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block font-poppins text-sm font-semibold text-[#15122E]">Phone number *</span>
                        <input
                          required
                          type="tel"
                          value={form.phoneNumber}
                          onChange={updateForm("phoneNumber")}
                          placeholder="+1 (555) 123-4567"
                          className="h-12 w-full rounded-xl border border-[#15122E]/15 bg-white px-4 font-['DM_Sans'] text-[#15122E] outline-none transition-all placeholder:text-[#15122E]/35 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/15"
                        />
                      </label>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block font-poppins text-sm font-semibold text-[#15122E]">Company size *</span>
                        <select
                          required
                          value={form.companySize}
                          onChange={updateForm("companySize")}
                          className="h-12 w-full appearance-none rounded-xl border border-[#15122E]/15 bg-white px-4 font-['DM_Sans'] text-[#15122E] outline-none transition-all focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/15"
                        >
                          <option value="" disabled>Select company size</option>
                          <option value="1-10">1–10 employees</option>
                          <option value="11-50">11–50 employees</option>
                          <option value="51-200">51–200 employees</option>
                          <option value="201-500">201–500 employees</option>
                          <option value="501+">501+ employees</option>
                        </select>
                      </label>

                      <div>
                        <span className="mb-2 block font-poppins text-sm font-semibold text-[#15122E]">I need this for *</span>
                        <div className="relative">
                          <button
                            type="button"
                            aria-expanded={isDepartmentListOpen}
                            onClick={() => setIsDepartmentListOpen((open) => !open)}
                            className="flex min-h-12 w-full items-center justify-between gap-4 rounded-xl border border-[#15122E]/15 bg-white px-4 text-left font-['DM_Sans'] text-[#15122E] transition-all hover:border-[#6C63FF]/50"
                          >
                            <span className={form.departments.length ? "text-[#15122E]" : "text-[#15122E]/40"}>
                              {form.departments.length
                                ? form.departments.map((id) => departments.find((department) => department.id === id)?.label).join(", ")
                                : "Select departments"}
                            </span>
                            <ChevronDown className={"h-4 w-4 shrink-0 text-[#15122E]/50 transition-transform " + (isDepartmentListOpen ? "rotate-180" : "")} />
                          </button>

                          <AnimatePresence>
                            {isDepartmentListOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-2xl border border-[#15122E]/10 bg-white p-2 shadow-[0_16px_45px_rgba(21,18,46,0.14)]"
                              >
                                {departments.map((department) => {
                                  const selected = form.departments.includes(department.id);
                                  return (
                                    <button
                                      key={department.id}
                                      type="button"
                                      disabled={!department.available}
                                      onClick={() => toggleDepartment(department.id)}
                                      className={
                                        "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors " +
                                        (department.available ? "hover:bg-[#6C63FF]/5" : "cursor-not-allowed bg-[#15122E]/[0.025] opacity-50 blur-[0.2px]")
                                      }
                                    >
                                      <span className={"flex h-5 w-5 shrink-0 items-center justify-center rounded-md border " + (selected ? "border-[#6C63FF] bg-[#6C63FF]" : "border-[#15122E]/20 bg-white") }>
                                        {selected && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
                                      </span>
                                      <span className="flex flex-1 items-center justify-between gap-3">
                                        <span className="font-['DM_Sans'] text-sm font-medium text-[#15122E]">{department.label}</span>
                                        <span className={"rounded-full px-2 py-1 font-poppins text-[10px] font-semibold uppercase tracking-wide " + (department.available ? "bg-[#6C63FF]/10 text-[#4F46E5]" : "bg-[#15122E]/[0.06] text-[#15122E]/45") }>
                                          {department.available ? department.wave : "Wave Two · Coming Soon"}
                                        </span>
                                      </span>
                                    </button>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    <label className="mt-4 block">
                      <span className="mb-2 block font-poppins text-sm font-semibold text-[#15122E]">Tell us about your needs *</span>
                      <textarea
                        required
                        rows={3}
                        value={form.description}
                        onChange={updateForm("description")}
                        placeholder="What would you like Nexus AI First to help your team do?"
                        className="w-full resize-none rounded-xl border border-[#15122E]/15 bg-white px-4 py-3 font-['DM_Sans'] text-[#15122E] outline-none transition-all placeholder:text-[#15122E]/35 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/15"
                      />
                    </label>

                    <button
                      type="submit"
                      disabled={status === "submitting" || !form.departments.length}
                      className="mt-5 flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#15122E] px-6 py-3.5 font-poppins text-sm font-semibold text-white transition-colors hover:bg-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                      {status === "submitting" ? "Sending..." : "Send details"}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </GetInTouchModalContext.Provider>
  );
}
