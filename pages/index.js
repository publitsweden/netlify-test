import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import i18nextConfig from "../next-i18next.config"

const Homepage = () => {

  const router = useRouter()
  const { t } = useTranslation('translation')

  return (
    <>
      <main>
        <Header heading={t('components.country-dropdown.please-select')} title={t('components.country-dropdown.please-select')} />
        <div>
          <Link
            href='/'
            locale={router.locale === 'en' ? 'sv' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation'], i18nextConfig),
  },
})

export default Homepage
