export default class BookModel {
  constructor (title, author, description, city, type, image, active, id = null) {
    this.title = title
    this.author = author
    this.description = description
    this.city = city
    this.type = type
    this.image = image
    this.active = active
    // his.genre = active
    this.id = id
  }
}
