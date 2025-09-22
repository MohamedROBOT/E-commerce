export async function getUserWishlist () {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/wishlist`)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}