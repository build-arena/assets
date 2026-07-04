(function () {
  const media = window.matchMedia("(max-width: 700px)");
  let lastPhase = "";
  let textPhaseScrollToken = 0;

  function getLayout() {
    return document.querySelector(".layout.split");
  }

  function getActivePhase() {
    const active = document.querySelector(".phase-btn.active");
    return (active?.dataset?.phase || active?.textContent || "").trim().toLowerCase();
  }

  function isTextPhase(phase) {
    return phase === "plan" || phase === "draft";
  }

  function isFloatingPreviewPhase(phase) {
    return isTextPhase(phase) || phase === "build";
  }

  function setTextPhaseState(layout, phase, enabled) {
    layout.classList.toggle("mobile-text-phase", enabled);
    layout.classList.toggle("mobile-plan-phase", enabled && phase === "plan");
    layout.classList.toggle("mobile-draft-phase", enabled && phase === "draft");
  }

  function scrollTextPhase(layout, phase) {
    textPhaseScrollToken += 1;
    const token = textPhaseScrollToken;

    window.setTimeout(() => {
      if (token !== textPhaseScrollToken || !layout.classList.contains("mobile-text-phase")) return;

      const stream = layout.querySelector(".conversation-stream");
      if (!stream) return;

      let target = null;
      if (phase === "draft") {
        const cards = Array.from(stream.querySelectorAll(".stream-card, .bubble"));
        target = cards.find((card) => /Drafter|Draft Result/i.test(card.textContent || ""));
      }

      if (target) {
        const top =
          stream.scrollTop +
          target.getBoundingClientRect().top -
          stream.getBoundingClientRect().top -
          10;
        stream.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      } else {
        stream.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 180);
  }

  function disableMobileEnhancement(layout) {
    if (!layout) return;
    layout.classList.remove(
      "mobile-floating-preview",
      "mobile-build-enhanced",
      "mobile-preview-mode",
      "mobile-log-mode"
    );
    setTextPhaseState(layout, "", false);
    const bar = layout.querySelector(".mobile-build-mode-bar");
    if (bar) bar.remove();
  }

  function refresh() {
    const layout = getLayout();
    if (!layout) return;

    const phase = getActivePhase();
    const shouldUseFloatingPreview = media.matches && isFloatingPreviewPhase(phase);
    const shouldUseTextPhase = media.matches && isTextPhase(phase);

    if (!shouldUseFloatingPreview) {
      disableMobileEnhancement(layout);
      lastPhase = phase;
      return;
    }

    layout.classList.add("mobile-floating-preview");
    layout.classList.toggle("mobile-build-enhanced", phase === "build");
    layout.classList.remove("mobile-preview-mode", "mobile-log-mode");
    setTextPhaseState(layout, phase, shouldUseTextPhase);

    if (shouldUseTextPhase && lastPhase !== phase) {
      scrollTextPhase(layout, phase);
    }

    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
      window.setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 120);
    });
    lastPhase = phase;
  }

  const observer = new MutationObserver(() => {
    window.requestAnimationFrame(refresh);
  });

  function start() {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "value", "disabled"],
    });
    media.addEventListener?.("change", refresh);
    document.addEventListener("click", () => window.setTimeout(refresh, 0), true);
    refresh();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
