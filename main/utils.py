def create_profile(sender, instance, signal, created, **kwargs):
    """creating a profile when a user is created"""

    from models import UserProfile

    if created:
        UserProfile(user=instance).save()