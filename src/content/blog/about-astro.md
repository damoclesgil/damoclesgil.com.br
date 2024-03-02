---
author: Dâmocles Gil Marçal
pubDatetime: 2024-03-02T21:20:00Z
title: Why I migrate my blog publication from Next.js to astro
slug: astro-migrate
featured: true
draft: false
tags:
  - astro
description: "After Astro realesed version 4.0, I was excited to try out the new features and decided to rebuild my website with Astro. Let me share my experiences and the issues I encountered."
---

<div class="flex items-start justify-start">
  <img src="https://www.kozhuhds.com/_astro/astro.13c076fc_Z1Fph3F.webp"  width="190" alt="Astro" />
</div>
<!-- ![Astro](https://www.kozhuhds.com/_astro/astro.13c076fc_Z1Fph3F.webp) -->

Rebuilding the blog with Astro was a remarkably smooth experience. Let's explore the reasons why I decidade to make the move to Astro.

## Content Focused

> Astro was designed for building content-rich websites. This includes most marketing sites, publishing sites, documentation sites, blogs, portfolios, and some ecommerce sites.

My previous experience with Next.js showed me that it is more of an app-focused framework. The fact that it uses React as the default library and ships HTML with redundant JavaScript gave me another reason for migration.

## Fast by default

> Good performance is always important, but it is especially critical for content-focused websites. It has been well-proven that poor performance loses you engagement, conversions, and money.

![Real-Word Performance Comparison](https://www.kozhuhds.com/_astro/astro-speed.df5d06cc_1FCweY.webp)

Astro showcases incredible comparisons on their website, so it piqued my interest to give it a try and verify if it's a impressive as they claim.

## Astro 4.0

It was one of the main reasons. The features that were introduced were so exciting to try, and the actual experience turned out to be incredibly smooth. Let me highlight some of them.

### View transitions

In modern web development, it’s still challenging to manage view transitions, particularly for statically generated publications. However, after the introduction of the [ViewTransitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) in Chromium-based browsers, this task has become more manageable.
