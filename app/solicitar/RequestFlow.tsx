"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./request.module.css";

type RequestData = {
  category: string;
  service: string;
  description: string;
  date: string;
  location: string;
  budget: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  contact: string;
  origin: string;
};

const categories = [
  "Diseño y marca",
  "Impresión y gran formato",
  "Avisos y señalización",
  "Material POP",
  "Producción multimedia",
  "Espacios y adecuaciones",
  "Tecnología y control de acceso",
  "Soluciones digitales",
  "Otro / proyecto especial",
];

const initialData: RequestData = {
  category: "",
  service: "",
  description: "",
  date: "",
  location: "",
  budget: "",
  company: "",
  name: "",
  phone: "",
  email: "",
  contact: "WhatsApp",
  origin: "web",
};

function guessCategory(service: string) {
  const value = service.toLowerCase();
  if (value.includes("marca")) return "Diseño y marca";
  if (value.includes("impresión") || value.includes("gran formato")) return "Impresión y gran formato";
  if (value.includes("aviso") || value.includes("señal")) return "Avisos y señalización";
  if (value.includes("pop")) return "Material POP";
  if (value.includes("multimedia") || value.includes("video") || value.includes("audiovisual")) return "Producción multimedia";
  if (value.includes("espacio") || value.includes("adecuación")) return "Espacios y adecuaciones";
  if (value.includes("acceso") || value.includes("tecnolog")) return "Tecnología y control de acceso";
  if (value.includes("digital") || value.includes("web")) return "Soluciones digitales";
  return "";
}

export default function RequestFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<RequestData>(initialData);
  const [requestId, setRequestId] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("servicio") || "";
    const origin = params.get("origen") || "web";
    const saved = window.localStorage.getItem("dixoy-request-draft");

    if (saved) {
      try {
        const parsed = JSON.parse(saved) as RequestData;
        setData({
          ...initialData,
          ...parsed,
          service: service || parsed.service || "",
          category: service ? guessCategory(service) || parsed.category : parsed.category,
          origin,
        });
        return;
      } catch {
        // Si el borrador quedó corrupto, iniciamos limpio.
      }
    }

    setData((current) => ({
      ...current,
      service,
      category: guessCategory(service),
      origin,
    }));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("dixoy-request-draft", JSON.stringify(data));
  }, [data]);

  const summary = useMemo(() => {
    return [
      `Necesidad: ${data.category || "Por definir"}`,
      data.service ? `Servicio de origen: ${data.service}` : "",
      `Descripción: ${data.description || "Sin descripción"}`,
      data.date ? `Fecha aproximada: ${data.date}` : "",
      data.location ? `Lugar: ${data.location}` : "",
      data.budget ? `Presupuesto aproximado: ${data.budget}` : "",
      data.company ? `Empresa: ${data.company}` : "",
      `Contacto: ${data.name}`,
      data.phone ? `Teléfono: ${data.phone}` : "",
      data.email ? `Correo: ${data.email}` : "",
      `Preferencia de contacto: ${data.contact}`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [data]);

  const canContinue =
    step === 1
      ? Boolean(data.category)
      : step === 2
        ? Boolean(data.description.trim())
        : step === 3
          ? Boolean(data.name.trim() && data.phone.trim())
          : true;

  const update = (field: keyof RequestData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
  };

  const prepareRequest = () => {
    const id = `DX-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setRequestId(id);
    window.localStorage.setItem(
      "dixoy-request-last",
      JSON.stringify({ id, createdAt: new Date().toISOString(), ...data }),
    );

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      lead_source: data.origin,
      service_category: data.category,
      service_name: data.service || data.category,
    });
  };

  const whatsappHref = `https://wa.me/573118072144?text=${encodeURIComponent(
    `Hola DIXOY, preparé la solicitud ${requestId || ""}.\n\n${summary}`,
  )}`;

  const emailHref = `mailto:somos@dixoy.co?subject=${encodeURIComponent(
    `Solicitud DIXOY ${requestId || ""} - ${data.category}`,
  )}&body=${encodeURIComponent(`${summary}\n\nCódigo: ${requestId}`)}`;

  if (requestId) {
    return (
      <section className={styles.successShell}>
        <div className={styles.successCard}>
          <span className={styles.successMark}>✓</span>
          <p className={styles.eyebrow}>Solicitud preparada</p>
          <h2>{requestId}</h2>
          <p>
            Ya organizamos la información principal. Elige cómo enviarla a DIXOY para continuar con la revisión comercial.
          </p>
          <div className={styles.deliveryActions}>
            <a className={styles.primaryButton} href={whatsappHref} rel="noopener noreferrer" target="_blank">
              Enviar por WhatsApp
            </a>
            <a className={styles.secondaryButton} href={emailHref}>
              Enviar por correo
            </a>
          </div>
          <button
            className={styles.textButton}
            onClick={() => {
              setRequestId("");
              setStep(1);
            }}
            type="button"
          >
            Editar solicitud
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.flowShell}>
      <aside className={styles.flowAside}>
        <p className={styles.eyebrow}>Tu solicitud</p>
        <h2>Un solo flujo, aunque el proyecto combine varias áreas.</h2>
        <div className={styles.steps}>
          {["Necesidad", "Proyecto", "Contacto", "Revisión"].map((label, index) => {
            const number = index + 1;
            return (
              <button
                className={`${styles.stepItem} ${step === number ? styles.stepActive : ""} ${step > number ? styles.stepDone : ""}`}
                key={label}
                onClick={() => number < step && setStep(number)}
                type="button"
              >
                <span>{step > number ? "✓" : number.toString().padStart(2, "0")}</span>
                {label}
              </button>
            );
          })}
        </div>
        {data.service && (
          <div className={styles.contextBox}>
            <small>Vienes desde</small>
            <strong>{data.service}</strong>
            <p>Ya usamos ese contexto para orientar la solicitud.</p>
          </div>
        )}
      </aside>

      <div className={styles.formCard}>
        {step === 1 && (
          <div className={styles.formStep}>
            <div className={styles.formHead}>
              <span>01</span>
              <div>
                <p>¿Por dónde empezamos?</p>
                <h2>Selecciona lo que más se parece a tu necesidad.</h2>
              </div>
            </div>
            <div className={styles.optionGrid}>
              {categories.map((category) => (
                <button
                  className={`${styles.optionCard} ${data.category === category ? styles.optionSelected : ""}`}
                  key={category}
                  onClick={() => update("category", category)}
                  type="button"
                >
                  <span>{category}</span>
                  <i>→</i>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.formStep}>
            <div className={styles.formHead}>
              <span>02</span>
              <div>
                <p>El proyecto</p>
                <h2>Cuéntanos lo suficiente para entender el objetivo.</h2>
              </div>
            </div>
            <label className={styles.fieldWide}>
              <span>¿Qué necesitas lograr? *</span>
              <textarea
                onChange={(event) => update("description", event.target.value)}
                placeholder="Ejemplo: necesito producir 200 agendas corporativas para un evento, con diseño e impresión..."
                rows={6}
                value={data.description}
              />
            </label>
            <div className={styles.fieldGrid}>
              <label>
                <span>Fecha aproximada</span>
                <input onChange={(event) => update("date", event.target.value)} type="date" value={data.date} />
              </label>
              <label>
                <span>Ciudad / lugar</span>
                <input onChange={(event) => update("location", event.target.value)} placeholder="Bogotá, sede, evento..." value={data.location} />
              </label>
              <label>
                <span>Presupuesto aproximado</span>
                <input onChange={(event) => update("budget", event.target.value)} placeholder="Opcional" value={data.budget} />
              </label>
              <label>
                <span>Servicio específico</span>
                <input onChange={(event) => update("service", event.target.value)} placeholder="Opcional" value={data.service} />
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.formStep}>
            <div className={styles.formHead}>
              <span>03</span>
              <div>
                <p>Contacto</p>
                <h2>¿Con quién revisamos la solicitud?</h2>
              </div>
            </div>
            <div className={styles.fieldGrid}>
              <label>
                <span>Nombre *</span>
                <input onChange={(event) => update("name", event.target.value)} value={data.name} />
              </label>
              <label>
                <span>Empresa</span>
                <input onChange={(event) => update("company", event.target.value)} value={data.company} />
              </label>
              <label>
                <span>WhatsApp / teléfono *</span>
                <input inputMode="tel" onChange={(event) => update("phone", event.target.value)} value={data.phone} />
              </label>
              <label>
                <span>Correo</span>
                <input inputMode="email" onChange={(event) => update("email", event.target.value)} type="email" value={data.email} />
              </label>
            </div>
            <fieldset className={styles.contactChoice}>
              <legend>¿Cómo prefieres que continuemos?</legend>
              {["WhatsApp", "Llamada", "Correo"].map((item) => (
                <label key={item}>
                  <input
                    checked={data.contact === item}
                    name="contact"
                    onChange={() => update("contact", item)}
                    type="radio"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </fieldset>
          </div>
        )}

        {step === 4 && (
          <div className={styles.formStep}>
            <div className={styles.formHead}>
              <span>04</span>
              <div>
                <p>Revisión</p>
                <h2>Así recibirá DIXOY el contexto inicial.</h2>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div><span>Necesidad</span><strong>{data.category}</strong></div>
              {data.service && <div><span>Servicio</span><strong>{data.service}</strong></div>}
              <div className={styles.reviewWide}><span>Proyecto</span><p>{data.description}</p></div>
              {data.date && <div><span>Fecha</span><strong>{data.date}</strong></div>}
              {data.location && <div><span>Lugar</span><strong>{data.location}</strong></div>}
              <div><span>Contacto</span><strong>{data.name}</strong></div>
              <div><span>Teléfono</span><strong>{data.phone}</strong></div>
            </div>
            <button className={styles.prepareButton} onClick={prepareRequest} type="button">
              Preparar solicitud →
            </button>
          </div>
        )}

        <div className={styles.formNav}>
          <button disabled={step === 1} onClick={() => setStep((value) => Math.max(1, value - 1))} type="button">
            ← Atrás
          </button>
          {step < 4 && (
            <button
              className={styles.nextButton}
              disabled={!canContinue}
              onClick={() => setStep((value) => Math.min(4, value + 1))}
              type="button"
            >
              Continuar →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
