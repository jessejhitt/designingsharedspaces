/* Submission form: populates selects from the shared taxonomy, switches between
   case study / opportunity, and prepares the submission as JSON to copy or download.
   Static site — nothing is transmitted. To wire up sending, point this at a form
   service such as Formspree, or a mailto: fallback. */

document.addEventListener("DOMContentLoaded", () => {
  const fill = (id, options, placeholder) => {
    const el = document.getElementById(id);
    el.innerHTML = `<option value="">${placeholder || "Select…"}</option>` +
      options.map(o => `<option>${o}</option>`).join("");
  };

  fill("f-borough",    TAXONOMY.boroughs.concat(["Another London borough"]));
  fill("f-faith",      TAXONOMY.faith.concat(["Another tradition"]));
  fill("f-sacredness", TAXONOMY.sacredness);
  fill("f-governance", TAXONOMY.governance);
  fill("f-publicness", Object.values(TAXONOMY.publicnessLabels));
  fill("f-scale",      TAXONOMY.scale);
  fill("f-cost",       TAXONOMY.cost.concat(["Don't know"]));
  fill("f-state",      TAXONOMY.currentState);
  fill("f-lead",       ["Council-owned", "Faith-led", "Charity partner needed", "Friends group active", "Not sure"]);

  const choices = (id, options, name) => {
    document.getElementById(id).innerHTML = options.map(o =>
      `<label class="choice"><input type="checkbox" name="${name}" value="${o}"><span>${o}</span></label>`).join("");
  };
  choices("f-uses", TAXONOMY.uses, "uses");
  choices("f-dimensions", TAXONOMY.dimensions, "dimensions");

  document.addEventListener("change", e => {
    const box = e.target.closest(".choice input");
    if (box) box.closest(".choice").classList.toggle("checked", box.checked);
  });

  /* ---------------- mode switch ---------------- */
  let mode = "case";
  const buttons = document.querySelectorAll(".mode-switch button");
  const applyMode = () => {
    document.querySelectorAll("[data-only]").forEach(el => { el.hidden = el.dataset.only !== mode; });
    buttons.forEach(b => {
      const on = b.dataset.mode === mode;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
  };
  buttons.forEach(b => b.addEventListener("click", () => { mode = b.dataset.mode; applyMode(); }));
  applyMode();

  /* ---------------- prepare submission ---------------- */
  const val = id => document.getElementById(id).value.trim();
  const checked = name => [...document.querySelectorAll(`input[name="${name}"]:checked`)].map(b => b.value);

  document.getElementById("f-submit").addEventListener("click", () => {
    const result = document.getElementById("f-result");

    if (!val("f-name") || !val("f-borough")) {
      result.hidden = false;
      result.innerHTML = `
        <div class="panel panel--red" role="alert">
          <h3 class="h-small">Two details needed</h3>
          <p class="body-sm" style="margin-top:8px">Add the site name and borough — everything
             else can be filled in later.</p>
        </div>`;
      result.scrollIntoView({ block: "nearest" });
      return;
    }

    const submission = {
      type: mode === "case" ? "Case study" : "Opportunity site",
      submitted: new Date().toISOString().slice(0, 10),
      site: {
        name: val("f-name"),
        borough: val("f-borough"),
        address: val("f-address"),
        faith: val("f-faith"),
        sacredness: val("f-sacredness")
      },
      contact: {
        name: val("f-contact-name"),
        email: val("f-contact-email"),
        relationship: val("f-relationship")
      }
    };

    if (mode === "case") {
      submission.caseStudy = {
        governance: val("f-governance"),
        publicness: val("f-publicness"),
        scale: val("f-scale"),
        cost: val("f-cost"),
        uses: checked("uses"),
        story: val("f-story")
      };
    } else {
      submission.opportunity = {
        dimensions: checked("dimensions"),
        currentState: val("f-state"),
        whoCouldLead: val("f-lead"),
        potential: val("f-potential")
      };
    }

    const json = JSON.stringify(submission, null, 2);
    const filename = `pwr-submission-${submission.site.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`;

    result.hidden = false;
    result.innerHTML = `
      <div class="panel panel--green" role="status">
        <h3 class="panel-title" style="font-size:1.25rem">Submission prepared</h3>
        <p class="body-sm" style="margin-top:8px">Download it or copy it, and send it to the
           database maintainer. When the site gains a backend, this step will send automatically.</p>
        <pre style="margin-top:16px; padding:16px; border-radius:10px; background:var(--paper-pure);
                    border:1px solid var(--hair); overflow:auto; font-size:.8125rem; max-height:340px">${json.replace(/</g, "&lt;")}</pre>
        <div class="btn-row" style="margin-top:16px">
          <button type="button" class="btn btn--sm" id="dl-json">Download JSON</button>
          <button type="button" class="btn btn--ghost btn--sm" id="copy-json">Copy to clipboard</button>
        </div>
      </div>`;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });

    document.getElementById("dl-json").addEventListener("click", () => {
      const blob = new Blob([json], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      a.click();
      URL.revokeObjectURL(a.href);
    });
    document.getElementById("copy-json").addEventListener("click", async e => {
      try {
        await navigator.clipboard.writeText(json);
        e.target.textContent = "Copied ✓";
      } catch {
        e.target.textContent = "Select the text above and copy";
      }
    });
  });
});
