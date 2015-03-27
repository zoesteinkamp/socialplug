from datetime import date
from allauth.socialaccount.templatetags.socialaccount import register


@register.filter(name='get_due_date_string')
def get_due_date_string(value):
    delta = value - date.today()

    if delta.days == 0:
        return "Today!"
    elif delta.days < 1:
        return "%s %s ago!" % (abs(delta.days),
            ("day" if abs(delta.days) == 1 else "days"))
    elif delta.days == 1:
        return "Tomorrow"
    elif delta.days > 1:
        return "In %s days" % delta.days