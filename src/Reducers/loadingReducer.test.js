import * as actions from '../Actions'
import { errorReducer } from './errorReducer'

describe('errorReducer', () => {
    let mockDefaultState;
    
    beforeEach(() => {
        mockDefaultState = ''
    })

    it('should return state if there is no action.type', () => {
        const mockAction = {}
        const results = errorReducer(mockDefaultState, mockAction)
        expect(results).toEqual(mockDefaultState)
    })

    it('should return a message if the action.type is HAS_ERROR', () => {
        const mockMessage = 'Loading.  Sorry for the delay.'
        const results = errorReducer(mockDefaultState, actions.hasError(mockMessage))
        expect(results).toEqual(mockMessage)
    })
})