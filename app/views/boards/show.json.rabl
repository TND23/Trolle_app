object @board
attribute :boardtitle, :board_id
child(:lists) do
  attribute :listtitle, :list_id
  child(:cards) do
    attribute :cardtitle
  end
end