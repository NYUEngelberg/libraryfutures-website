class EmbeddedAssetBlockRenderer < RichTextRenderer::BaseNodeRenderer
  def render(node)
    entry = node['data']['target']

    if entry['url'].end_with?(*['.pdf', '.doc'])
      return "<a href='#{entry['url']}'>#{entry['title']}</a>"
    end

    "<img id='#{entry['title']}' class=\"figure__image\" src='#{entry['url']}' alt='#{entry['description']}' />"
  end
end
