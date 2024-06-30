from core.user.models import ApiOwner, dailyCount


def reset_monthly_count():
    ApiOwner.objects.filter(SubscriptionType="FREE").update(NumberRequestLast=10000)
    ApiOwner.objects.filter(SubscriptionType="BASIC").update(NumberRequestLast=300000)
    ApiOwner.objects.filter(SubscriptionType="PREMUIM").update(NumberRequestLast=999999999)


def reset_daily_count():
    dailyCount.objects.all().update(NumberRequestMade=0)