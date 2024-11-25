---
title: embodied data
nav_order: 3
last_modified_date: 2020-09-10 12:05
---

{% include glossary.md %}

{% include references.md %}


## embodied data, endataed body

{% assign randomNumber = page.content | size | modulo: 10 | round: 3 %}

### CURRENT QUALIFYING EXAM CREDIT SCORE: {{ randomNumber }}

_a running total calculated using a proprietary algorithm, from a range of weighted factors, updated in real time (range: 0--10)_
{: .fs-2 }

### each day in this body

{% for qualday in site.data.SummQuals %} 

#### {{qualday.date | date_to_string }}

    - on computer {{ qualday.total_duration_formatted }} ({{ qualday.all_productive_duration_formatted }} labeled productive, {{ qualday.all_distracting_duration_formatted }} labeled distracting) 
    {%- assign light = qualday.sleep.lightsleepduration | divided_by: 3600 | round: 2 -%}
    {% assign deep = qualday.sleep.deepsleepduration | divided_by: 3600 | round: 2 %}
    - slept {{ light | plus: deep }} hours ({{ light }} hours lightly and {{ deep }} hours deeply)
    - walked {{ qualday.activity.steps }} steps
    - heart rate averaged {{ qualday.activity.hr_average }} beats per min ({{ qualday.activity.hr_min }} bpm min, {{ qualday.activity.hr_max }} bpm max)
    - weight was {{ qualday.weight.value | times: 0.0022046 | round: 1 }}

{% endfor %}

<!-- {: .image-right width="400px" } -->


### mood

![bjork](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FRu-Katya-Bjork.gif?v=1598145397867) 
Exam 3
{: fs-2 .purple-inline }

![murderpretzels](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FNG-murder.gif?v=1597981587364) 
Exam 2
{: fs-2 .purple-inline }

![easycheese](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FHQ-cheese.gif?v=1597842831179)
Exam 1
{: fs-2 .purple-inline }

