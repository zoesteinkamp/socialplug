
import rest_framework_filters as filters

class UserFilter(filters.FilterSet):
    username = filters.CharFilter(name='username')


class PostFilter(filters.FilterSet):
    title = filters.CharFilter(name='title')
    category = filters.ChoiceFilter(name='category')
    date = filters.DateFilter(name='date')
    # author = filters.RelatedFilter(UserFilter, name='author')
