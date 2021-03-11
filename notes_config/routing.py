from channels.routing import ProtocolTypeRouter, URLRouter
import notes_app.routing
from channels.auth import AuthMiddlewareStack
application = ProtocolTypeRouter({
    "websocket": AuthMiddlewareStack(
        URLRouter(
            notes_app.routing.websocket_urlpatterns
        )
    )
})