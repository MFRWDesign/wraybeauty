# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

include Nanoc::Helpers::LinkTo

# File 'lib/nanoc/helpers/link_to.rb', line 90

def link_to_unless_current_active(text, target, attributes={})
  # Find path
  path = target.is_a?(String) ? target : target.path

  if @item_rep && @item_rep.path == path
    # Create message
    "<a href=\"\#\" class=\"active\" title=\"You're here.\">#{text}</a>"
  else
    link_to(text, target, attributes)
  end
end
