import { Navigate, useParams } from 'react-router-dom'
import { additionalInsights, insightPillars } from '../data/insights'
import { InsightArticlePage } from './InsightArticlePage'
import { PillarInsightPage } from './PillarInsightPage'

export function InsightSlugPage() {
  const { slug } = useParams()

  if (!slug) return <Navigate to="/" replace />

  if (insightPillars[slug]) return <PillarInsightPage />

  if (additionalInsights.some((article) => article.slug === slug)) {
    return <InsightArticlePage />
  }

  return <Navigate to="/" replace />
}
