import * as actions from '../Actions'
import { loadingReducer } from './loadingReducer'

describe('loadingReducer', () => {
	let mockDefaultState

	beforeEach(() => {
		mockDefaultState = {}
	})

	it('should return state if there is no action.type', () => {
		const mockAction = {}
		const results = loadingReducer(mockDefaultState, mockAction)
		expect(results).toEqual(mockDefaultState)
	})

	it('should return a boolean if the action.type is IS_LOADING', () => {
		const mockBool = true
		const results = loadingReducer(mockDefaultState, actions.isLoading(mockBool))
		expect(results).toBe(mockBool)
	})
})