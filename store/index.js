export const state = () => ({
  locales: ['en', 'ta'],
  locale: 'en',
  langcodes: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'ta',
      iso: 'ta-IN',
      name: 'தமிழ்'
    }
  ],
  gaTrackingCodes: 'UA-144761111-2'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
