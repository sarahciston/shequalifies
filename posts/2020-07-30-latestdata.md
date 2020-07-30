---
layout: post
title: current data
last_modified_date: 2020-07-30 12:05
parent: home
---

# current data

<ui>
{% for test in site.data.rescueDaily %}
  <li>{{ test.total_duration_formatted }} on computer {{test.date}} </li>
{% endfor %}
</ui>

<span class="fs-3">
[computer usage]({{ site.baseurl }}{% link assets/data/rescueDaily.json %}){: .btn } [Update the data](/rescueDaily){: .btn }
</span>

This refreshes the authorization to get data about the writer's body: 
<span class="fs-3">
[refresh](/refresh){: .btn }
</span>