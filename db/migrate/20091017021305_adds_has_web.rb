class AddsHasWeb < ActiveRecord::Migration
  def self.up
    add_column :contacts, :has_web, :boolean
  end

  def self.down
    remove_column :contacts, :has_web, :boolean
  end
end
