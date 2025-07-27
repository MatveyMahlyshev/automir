from fastapi import APIRouter

from api_v1.products.views import router as products_router
from api_v1.users.views import router as users_router

router = APIRouter()

router.include_router(
    router=products_router,
    prefix="/products",
)

router.include_router(
    router=users_router,
    prefix="/users",
)
