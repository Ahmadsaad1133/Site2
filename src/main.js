
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App            from './App.vue'
import router         from './router'
import '@/styles/base.css'

const messages = {
  en: {

    header: {
      searchIconAlt:     'Search Icon',
      searchPlaceholder: 'Search',
      userAvatarAlt:     'User avatar of {name}',
      arrowIconAlt:      'Toggle menu',
      bellIconAlt:       'Notifications',
      addIconAlt:        'Add category',
      filterIconAlt:     'Filter icon',
      filterText:        'Filter',
      filterArrowAlt:    'Expand filter',
    },

    categories: {
      Creative: 'Creative',
      Digital:  'Digital',
      Abstract: 'Abstract',

    },

    sidebar: {
      logoAlt:             'Logo Icon',
      chain:               'Chain',
      createAlt:           'Star Icon',
      create:              'Create',
      homeAlt:             'Home Icon',
      home:                'Home',
      notificationsAlt:    'Notifications Icon',
      collectionAlt:       'Collection Icon',
      collection:          'Collection',
      downloadsAlt:        'Downloads Icon',
      downloads:           'Downloads',
      chatAlt:             'Chat Icon',
      chat:                'Chat',
      historyAlt:          'History Icon',
      history:             'History',
      language:            'Language',
      settingsAlt:         'Settings Icon',
      settings:            'Settings',
      logoutAlt:           'Logout Icon',
      logout:              'Logout',
      darkModeAlt:         'Dark Mode Icon',
      dark:                'Dark',
      lightModeAlt:        'Light Mode Icon',
      light:               'Light',
    },


    home:                'Home',
    create:              'Create',
    properties:          'Properties',
    info:                'Info',
    keyword:             'Keyword',
    keywordPlaceholder:  'The Starry Night',
    genres:              'Genres',
    selectGenre:         'Select Genre...',
    size:                'Size',
    selectSize:          'Select Size...',
    colors:              'Colors',
    clear:               'Clear',
    add:                 'Add',
    sample:              'Sample',
    dragAndDrop:         'Drag and Drop',
    orBrowse:            'or Browse',
    supportImageFormats: 'Support all image formats',
  },
  ar: {

    header: {
      searchIconAlt:     'أيقونة البحث',
      searchPlaceholder: 'بحث',
      userAvatarAlt:     'صورة المستخدم {name}',
      arrowIconAlt:      'قائمة',
      bellIconAlt:       'الإشعارات',
      addIconAlt:        'أضف تصنيف',
      filterIconAlt:     'أيقونة التصفية',
      filterText:        'تصفية',
      filterArrowAlt:    'توسيع التصفية',
    },

    categories: {
      Creative: 'إبداعي',
      Digital:  'رقمي',
      Abstract: 'مجرد',

    },

    sidebar: {
      logoAlt:             'أيقونة الشعار',
      chain:               'تشين',
      createAlt:           'أيقونة نجمة',
      create:              'إنشاء',
      homeAlt:             'أيقونة الرئيسية',
      home:                'الرئيسية',
      notificationsAlt:    'أيقونة الإشعارات',
      collectionAlt:       'أيقونة المجموعة',
      collection:          'المجموعة',
      downloadsAlt:        'أيقونة التنزيلات',
      downloads:           'التنزيلات',
      chatAlt:             'أيقونة الدردشة',
      chat:                'الدردشة',
      historyAlt:          'أيقونة السجل',
      history:             'السجل',
      language:            'اللغة',
      settingsAlt:         'أيقونة الإعدادات',
      settings:            'الإعدادات',
      logoutAlt:           'أيقونة تسجيل الخروج',
      logout:              'تسجيل الخروج',
      darkModeAlt:         'أيقونة الوضع الداكن',
      dark:                'داكن',
      lightModeAlt:        'أيقونة الوضع الفاتح',
      light:               'فاتح',
    },


    home:                'الرئيسية',
    create:              'إنشاء',
    properties:          'الخصائص',
    info:                'معلومات',
    keyword:             'الكلمة المفتاحية',
    keywordPlaceholder:  'The Starry Night',
    genres:              'الأنواع',
    selectGenre:         'اختر نوعاً...',
    size:                'الحجم',
    selectSize:          'اختر الحجم...',
    colors:              'الألوان',
    clear:               'مسح',
    add:                 'إضافة',
    sample:              'عينة',
    dragAndDrop:         'اسحب وأسقط',
    orBrowse:            'أو تصفح',
    supportImageFormats: 'يدعم جميع صيغ الصور',
  }
}

const i18n = createI18n({
  legacy:        false,       
  globalInjection: true,     
  locale:        'en',
  fallbackLocale:'en',
  messages,
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
