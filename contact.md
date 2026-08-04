---
layout: page
title: Contact Us
description: "Contact Blue Key Home Finance for home loan guidance, bond origination support, and property finance advice."
permalink: /contact/
background: gray
---

{% assign team_member = site.data.sitetext.team.people.first %}
{% assign phone_link = team_member.social | where: "icon", "fas fa-phone" | first %}
{% assign email_link = team_member.social | where: "icon", "fas fa-envelope" | first %}
{% assign phone_number = phone_link.url | remove: "tel:" %}
{% assign display_phone = phone_number | replace: "+27", "0" | replace: "825190947", "82 519 0947" %}
{% assign whatsapp_url = site.data.sitetext.footer.whatsapp.url | default: phone_link.url %}
{% assign email_url = email_link.url %}
{% unless email_url %}{% assign email_url = site.email | prepend: "mailto:" %}{% endunless %}
{% assign display_email = email_url | remove: "mailto:" | split: "?" | first %}

<section class="contact-page" aria-labelledby="contact-title">
  <div class="contact-page__heading text-center">
    <span class="contact-page__eyebrow">Let’s talk home finance</span>
    <h1 id="contact-title">Contact Us</h1>
    <p>Questions about pre-approval, your bond application, or what comes next? We’re here to make it simpler.</p>
  </div>

  <div class="contact-page__grid">
    <article class="contact-card contact-card--hours">
      <div class="contact-card__icon" aria-hidden="true">
        <i class="far fa-clock"></i>
      </div>
      <div class="contact-card__intro">
        <span class="contact-card__badge">Our working rhythm</span>
        <h2>Office hours</h2>
        <p>Home-loan questions don’t need to feel heavy. Catch us during these hours and let’s work through them together.</p>
      </div>

      <dl class="office-hours">
        <div class="office-hours__row office-hours__row--open">
          <dt>Monday – Friday</dt>
          <dd><span class="office-hours__status">Open</span> 8:00 AM – 5:00 PM</dd>
        </div>
        <div class="office-hours__row">
          <dt>Saturday &amp; Sunday</dt>
          <dd>Closed</dd>
        </div>
        <div class="office-hours__row">
          <dt>Public holidays</dt>
          <dd>Closed</dd>
        </div>
      </dl>
    </article>

    <article class="contact-card contact-card--person">
      <div class="contact-person">
        <img src="{{ team_member.image | relative_url }}" alt="{{ team_member.name }}, {{ team_member.role }}" loading="lazy" decoding="async">
        <div>
          <span class="contact-card__badge">Your finance specialist</span>
          <h2>{{ team_member.name }}</h2>
          <p>Personal guidance from your first affordability question to the final bank offer.</p>
        </div>
      </div>

      <div class="contact-actions" aria-label="Contact {{ team_member.name }}">
        <a class="contact-action" href="{{ phone_link.url }}">
          <span class="contact-action__icon" aria-hidden="true"><i class="fas fa-phone"></i></span>
          <span><small>Call {{ team_member.name | split: " " | first }}</small><strong>{{ display_phone }}</strong></span>
        </a>
        <a class="contact-action" href="{{ whatsapp_url }}" target="_blank" rel="noopener">
          <span class="contact-action__icon contact-action__icon--whatsapp" aria-hidden="true"><i class="fab fa-whatsapp"></i></span>
          <span><small>Send a WhatsApp</small><strong>Start a conversation</strong></span>
        </a>
        <a class="contact-action" href="{{ email_url }}">
          <span class="contact-action__icon" aria-hidden="true"><i class="fas fa-envelope"></i></span>
          <span><small>Email us</small><strong>{{ display_email }}</strong></span>
        </a>
      </div>
    </article>
  </div>
</section>
