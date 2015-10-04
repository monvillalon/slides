class Presentation < ActiveRecord::Base
  belongs_to :course
  has_many   :slides

  def content
     content = ""
     size   = slides.size
     slides.each_with_index do | slide , i |
       unless slide.halign.chomp.empty? and slide.valign.chomp.empty?
         content += "class: " + [slide.halign , slide.valign ].join(",") + "\n"
       end
       content += slide.content.gsub(/^-{3,}$/, '<hr />')
       content +=  "\n---\n" unless i == size - 1
     end
     content
  end

end
