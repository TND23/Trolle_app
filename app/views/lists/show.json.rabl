object @list
attributes :listtitle, :board_id
child(:cards) do
  attribute :cardtitle
end
