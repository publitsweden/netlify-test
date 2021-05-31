import Link from 'next/link'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import i18nextConfig from "../next-i18next.config"
import nextI18nextConfig from '../next-i18next.config'

const SecondPage = () => {

  const { t } = useTranslation('translation')

  return (
    <>
      <main>
        <Header heading={t('components.order-preview.amount-to-pay')} title={t('title')} />
        <Link href='/'>
          <button
            type='button'
          >
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation'], nextI18nextConfig),
  },
})

export default SecondPage
