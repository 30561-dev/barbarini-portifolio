import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { personalLinks, contactConfig } from '../data/links';
import {
  Send,
  Mail,
  Github,
  Linkedin,
  Instagram,
  AlertCircle,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5 text-slate-200" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-blue-400" />;
      case 'e-mail':
        return <Mail className="w-5 h-5 text-cyan-400" />;
      case 'instagram':
        return <Instagram className="w-5 h-5 text-pink-400" />;
      default:
        return <Mail className="w-5 h-5 text-cyan-400" />;
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor, informe seu nome.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Por favor, informe seu e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Insira um endereço de e-mail válido.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Por favor, digite sua mensagem.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          sysId="07"
          title="Vamos construir algo interessante?"
          subtitle="Tem uma ideia, projeto ou oportunidade? Entre em contato e vamos conversar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Direct channels & Cards (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-sm bg-[#101827]/80 dark:bg-[#101827]/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hud-corner shadow-xl">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>COMMS_CHANNEL // DIRECT_LINKS</span>
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                Canais de Conexão
              </h3>
              <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6 font-sans">
                Selecione o canal de sua preferência para iniciar uma conversa, propor ideias ou acompanhar meus repositórios.
              </p>

              <div className="space-y-3">
                {personalLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-sm bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 light:hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-slate-800 dark:bg-slate-800 light:bg-slate-200 border border-slate-700/60 group-hover:border-cyan-400 transition-colors">
                        {getSocialIcon(link.name)}
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-sm text-slate-200 dark:text-slate-200 light:text-slate-900 group-hover:text-cyan-300 light:group-hover:text-blue-600 transition-colors">
                          {link.name}
                        </div>
                        <div className="font-mono text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                          {link.usernameDisplay}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {link.isPlaceholder && (
                        <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                          config
                        </span>
                      )}
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Direct Mailbox Copy Box */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="flex items-center justify-between gap-2 p-3 rounded-sm bg-cyan-950/20 dark:bg-cyan-950/20 light:bg-blue-50 border border-cyan-500/30">
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-cyan-400 uppercase block tracking-wider">
                      E-MAIL OFICIAL
                    </span>
                    <span className="font-mono text-xs text-slate-300 dark:text-slate-300 light:text-slate-800 truncate block">
                      {contactConfig.contactEmail}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactConfig.contactEmail)}
                    type="button"
                    className="p-2 rounded bg-slate-900/80 hover:bg-slate-800 text-cyan-300 transition-colors shrink-0"
                    title="Copiar e-mail"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-sm bg-[#101827]/80 dark:bg-[#101827]/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hud-corner shadow-xl">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider">
                    TRANSMISSÃO DE MENSAGEM
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">SYS.ENCRYPT: TLS</span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-sm bg-cyan-950/30 border border-cyan-400/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-900/50 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mx-auto shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-100 dark:text-slate-100 light:text-slate-900">
                    Mensagem validada com sucesso!
                  </h4>
                  <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-md mx-auto leading-relaxed">
                    Este formulário opera em <strong className="text-cyan-300 font-mono">modo demonstrativo</strong> (sem servidor backend). Para enviar sua mensagem diretamente a mim, utilize o botão abaixo para abrir seu cliente de e-mail:
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <Button
                      asLink
                      href={`mailto:${contactConfig.contactEmail}?subject=Contato via Portfólio - ${encodeURIComponent(
                        formData.name
                      )}&body=${encodeURIComponent(
                        `Olá Edson,\n\nMeu nome é ${formData.name} (${formData.email}).\n\nMensagem:\n${formData.message}`
                      )}`}
                      variant="primary"
                      size="md"
                      icon={<Mail className="w-4 h-4" />}
                    >
                      Abrir cliente de e-mail
                    </Button>
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                    >
                      Nova mensagem
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Nome completo <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Carlos Silva"
                      className={`w-full px-4 py-3 rounded-sm bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-rose-400 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Seu E-mail <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: seu-nome@dominio.com"
                      className={`w-full px-4 py-3 rounded-sm bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-rose-400 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Mensagem <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escreva sua mensagem, proposta ou ideia..."
                      className={`w-full px-4 py-3 rounded-sm bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border text-slate-100 dark:text-slate-100 light:text-slate-900 text-sm focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-rose-400 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={<Send className="w-4 h-4" />}
                      iconPosition="right"
                      className="w-full sm:w-auto"
                    >
                      Enviar mensagem
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
