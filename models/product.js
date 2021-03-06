import mongoose from 'mongoose'

const Product = mongoose.model('Product', {
  title: {
    type: String
  },
  price: {
    type: Number
  },
  color: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  availableSizes: {
    type: Array
  },
  sizes: {
    type: Array,
    default: [
      'XS',
      'S',
      'M',
      'L',
      'XL'
    ]
  },
  imageUrl: {
    type: String
  },
  imageName: {
    type: String,
  }
})

export default Product