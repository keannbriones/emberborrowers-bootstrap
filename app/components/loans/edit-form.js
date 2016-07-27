import Ember from 'ember';

export default Ember.Component.extend({
	//
	// By default the store is not injected into components, so we use
	// the "inject.service" helper to make it available.
	//
	store: Ember.inject.service(),
	articles: Ember.computed({
		get() {
			//
			// Since we are using Ember.inject.service, we need to call the
			// store using the get helper
			//
			return this.get('store').findAll('article');
		}
	}).readOnly(),
	actions: {
		save() {
			//
			// We probably want to verify here that the model has an article
			// before saving
			//
			this.get('model').save().then((model) => {
				this.back(model.get('friend'));
			}, () => {
				this.set(
					'errorMessage',
					'there was something wrong saving the loan'
				);
			});
		},
		cancel() {
			this.back(this.get('model.friend'));
		}
	}
});
