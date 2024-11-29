import { TerraformConfig, TerraformResource } from "tfs";
export interface DataColorPalette {
  colors?: string[];
  empty_fill_color?: string;
  min_max_gradient?: string[];
}
export interface Border {
  show?: boolean;
}
export interface Tile {
  border: Border;
}
export interface Gutter {
  show?: boolean;
}
export interface Margin {
  show?: boolean;
}
export interface TileLayout {
  gutter: Gutter;
  margin: Margin;
}
export interface Sheet {
  tile: Tile;
  tile_layout: TileLayout;
}
export interface FontFamilies {
  font_family?: string;
}
export interface Typography {
  font_families: FontFamilies;
}
export interface UiColorPalette {
  accent?: string;
  accent_foreground?: string;
  danger?: string;
  danger_foreground?: string;
  dimension?: string;
  dimension_foreground?: string;
  measure?: string;
  measure_foreground?: string;
  primary_background?: string;
  primary_foreground?: string;
  secondary_background?: string;
  secondary_foreground?: string;
  success?: string;
  success_foreground?: string;
  warning?: string;
  warning_foreground?: string;
}
export interface Configuration {
  data_color_palette: DataColorPalette;
  sheet: Sheet;
  typography: Typography;
  ui_color_palette: UiColorPalette;
}
export interface Permissions {
  actions: string[];
  principal: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsQuicksightThemeArgs {
  base_theme_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  theme_id: string;
  version_description?: string;
  configuration: Configuration;
  permissions: Permissions;
  timeouts: Timeouts;
}
export class aws_quicksight_theme extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly created_time!: string;
  readonly id?: string;
  readonly last_updated_time!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version_number!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightThemeArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_theme");
  }
}