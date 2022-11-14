module.exports = {

    posts: [
        {
            id: "postId",
            title: "Test",
            description: "Description to test how it is"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPosts(title, description) {
        this.posts.push({ id: idGenerator(), title, description })
    },
    deletePost(id) {
    }
}
function idGenerator() {
    return Math.random().toString(36).substring(2, 9)
}