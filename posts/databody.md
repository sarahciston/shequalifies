---
title: embodied data
nav_order: 3
last_modified_date: 2020-08-17 20:57
---

{% include glossary.md %}

{% include references.md %}

## embodied data, endataed body

### CURRENT QUALIFYING EXAM CREDIT SCORE: 00

_a running total calculated using a proprietary algorithm, from a range of weighted factors, updated in real time (range: 0--1)_
{: .fs-2 }

### today in this body so far...

<!--     {% assign wordcount = site.page.co-writing-with-algorithms.wc %} -->
<!--     - I have written {{ wordcount }} words -->
    {%- assign activities = site.data.withingsToday.body.activities -%}
    {%- assign lengthToday = activities | size | minus: 1 -%}
    {% assign today = activities[lengthToday] %}
    - I have walked {{ today.steps }} steps, or {{ today.distance }} meters   
    - My heart rate is {{ today.hr_average }} beats per min average ({{ today.hr_min }} beats per min minimum, {{ today.hr_max }} beats per min maximum)
    
    {%- assign measuregrps = site.data.withingsWeight.body.measuregrps -%}
    {%- assign lengthWeight = measuregrps | size | minus: 1 -%}
    {% assign weight = measuregrps[lengthWeight].measures[0].value %}
    - My weight is {{ weight | times: 0.0022046 | round: 1 }}
    
    {%- assign series = site.data.withingsSleep.body.series -%}
    {%- assign lengthSleep = series | size | minus: 1 -%}
    {%- assign sleep = series[lengthSleep].data -%}
    {%- assign light = sleep.lightsleepduration | divided_by: 3600 | round: 2 -%}
    {% assign deep = sleep.deepsleepduration | divided_by: 3600 | round: 2 %}
    - I slept {{ light | plus: deep }} hours ({{ light }} hours lightly and {{ deep }} hours deeply).
  
### and I spent...

    {% assign day = site.data.rescueDaily[0] %}
    - {{ day.total_duration_formatted }} total on computer
    - {{ day.all_productive_percentage }} percent was labeled productive
    - {{ day.all_distracting_percentage }} percent was labeled distracting

### current mood...

![easycheese](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FHQ-cheese.gif?v=1597842831179)

#### more details

    - {{ day.business_duration_formatted }} on business
    - {{ day.communication_and_scheduling_duration_formatted }} on communication and scheduling
    - {{ day.social_networking_duration_formatted }} on social networking
    - {{ day.design_and_composition_duration_formatted }} on design and composition
    - {{ day.entertainment_duration_formatted }} on entertainment
    - {{ day.news_duration_formatted }} on news
    - {{ day.software_development_duration_formatted }} on software development
    - {{ day.reference_and_learning_duration_formatted }} on reference and learning
    - {{ day.shopping_duration_formatted }} on shopping
    - {{ day.utilities_duration_formatted }} on utilities
    - {{ day.uncategorized_duration_formatted }} was uncategorized
    
#### prior days' computer use

    {% for test in site.data.rescueDaily %}    
    - {{test.date | date_to_string }}: on computer {{ test.total_duration_formatted }}
    {%- endfor -%}

