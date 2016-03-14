from django.conf.urls import patterns, url

from views import msg_reply, msg_reply_new, \
    group_message_remove, \
    group_discuss, group_wiki, group_wiki_create, \
    group_wiki_page_new, group_wiki_page_edit, group_wiki_pages, \
    group_wiki_page_delete, group_wiki_use_lib, group_remove, \
    group_add_discussion, group_add

urlpatterns = patterns('',
    url(r'^(?P<group_id>\d+)/discuss/$', group_discuss, name='group_discuss'),
    url(r'^(?P<group_id>\d+)/wiki/$', group_wiki, name='group_wiki'),
    url(r'^(?P<group_id>\d+)/wiki/(?P<page_name>[^/]+)$', group_wiki, name='group_wiki'),
    url(r'^(?P<group_id>\d+)/wiki_pages/$', group_wiki_pages, name='group_wiki_pages'),
    url(r'^(?P<group_id>\d+)/wiki_create/$', group_wiki_create, name='group_wiki_create'),
    url(r'^(?P<group_id>\d+)/wiki_use_lib/$', group_wiki_use_lib, name='group_wiki_use_lib'),
    url(r'^(?P<group_id>\d+)/wiki_page_new/$', group_wiki_page_new, name='group_wiki_page_new'),
    url(r'^(?P<group_id>\d+)/wiki_page_edit/(?P<page_name>[^/]+)$', group_wiki_page_edit, name='group_wiki_page_edit'),
    url(r'^(?P<group_id>\d+)/wiki_page_delete/(?P<page_name>[^/]+)$', group_wiki_page_delete, name='group_wiki_page_delete'),
    url(r'^reply/(?P<msg_id>[\d]+)/$', msg_reply, name='msg_reply'),
    url(r'^reply/new/$', msg_reply_new, name='msg_reply_new'),
    url(r'^(?P<group_id>\d+)/remove/$', group_remove, name='group_remove'),
    url(r'^(?P<group_id>\d+)/msgdel/(?P<msg_id>\d+)/$', group_message_remove, name='group_message_remove'),
    url(r'^(?P<group_id>\d+)/discussion/add/$', group_add_discussion, name='group_add_discussion'),
    url(r'^add/$', group_add, name='group_add'),
)
