class EmbeddedEntryBlockRenderer < RichTextRenderer::BaseNodeRenderer
  def render(node)
    entry = node['data']['target']
    "<div class='my-entry'><h3>#{entry.name}</h3><p><small>#{entry.description}</p></small></div>"
  end
end
