// Exercise 2 Part 1
// Finish this function by throwing an error if the id is invalid.
export function validateId(id) {
    // Check that the id exists
    if (id === null || id === undefined) {
      throw new Error('ID is required')
    }
  
    // The id should be a string:
    if (typeof id !== 'string') {
      throw new Error('ID should be a string')
    }
  
    // The id should be an odd number of characters long:
    // TODO: throw an error
    if (id.length % 2 == 0) {
      throw new Error('ID should be an odd number of characters long')
    }
  
    // The id should contain the letter 'a':
    // TODO: throw an error
    if (!id.includes('a')) {
      throw new Error(`ID should contain the letter 'a'`)
    }
  
    // The id should be all lowercase:
    // TODO: throw an error
    if (id !== id.toLowerCase()) {
      throw new Error(`ID should be all lowercase`)
    }
  }
  
  // Exercise 2 Part 2
  // Use the `validateId` function above to validate the id
  // return true if the id is valid or false otherwise.
  // If an error is thrown, catch it and call logger.error(err)
  export function isIdValid(id, logger) {
    try {
      validateId(id)
      return true
    } catch (error) {
    logger.error('ID is invalid')
    return false
    }
  }
  