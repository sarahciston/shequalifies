---
layout: post
title: embodied data
last_modified_date: 2020-08-01 13:59
---

## embodied data, endataed body

{% assign today = site.data.withingsToday.body.activities[0] %}
Today, in this body:
- I have walked {{ today.steps }} steps, or {{ today.distance }} meters
- My heart rate is {{ today.hr_average }} beats per min average ({{ today.hr_min }} beats per min minimum, {{ today.hr_max }} beats per min maximum)
{% assign weight = site.data.withingsWeight.body.measuregrps[0].measures[0].value %}
- My weight was {{ weight | times: 0.0022046 | round: 1 }}
- I slept {{ site.data.withingsSleep.body.series[0].data.lightsleepduration | divided_by: 3600 | round: 2 }} hours lightly and {{ site.data.withingsSleep.body.series[0].data.deepsleepduration | divided_by: 3600 | round: 2 }} hours deeply

{% assign yest = site.data.rescueDaily[0] %}
Yesterday, I spent:
- {{ yest.total_duration_formatted }} total on computer
- {{ yest.all_productive_percentage }} percent was labeled productive
- {{ yest.all_distracting_percentage }} percent was labeled distracting

<details><summary>more</summary>
- {{ yest.business_duration_formatted }} on business
- {{ yest.communication_and_scheduling_duration_formatted }} on communication and scheduling
- {{ yest.social_networking_duration_formatted }} on social networking
- {{ yest.design_and_composition_duration_formatted }} on design and composition
- {{ yest.entertainment_duration_formatted }} on entertainment
- {{ yest.news_duration_formatted }} on news
- {{ yest.software_development_duration_formatted }} on software development
- {{ yest.reference_and_learning_duration_formatted }} on reference and learning
- {{ yest.shopping_duration_formatted }} on shopping
- {{ yest.utilities_duration_formatted }} on utilities
- {{ yest.uncategorized_duration_formatted }} was uncategorized
</details>

<iframe width="700" height="400" src="https://www.youtube.com/embed/SznhRaT77G8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- <ui>
{% for test in site.data.rescueDaily %}
  <li>{{ test.total_duration_formatted }} on computer {{test.date}} </li>
{% endfor %}
</ui>

This refreshes the data about the writer's daily computer usage: 
<span class="fs-3">
[Update the data](/rescueDaily){: .btn }
</span>

This refreshes the authorization to get data about the writer's body: 
<span class="fs-3">
[refresh](/withRefresh){: .btn }
</span> -->