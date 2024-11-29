import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsQuicksightThemeArgsconfigurationDataColorPalette {
  colors?: string[];
  empty_fill_color?: string;
  min_max_gradient?: string[];
}
export interface AwsQuicksightThemeArgsconfigurationsheettileborder {
  show?: boolean;
}
export interface AwsQuicksightThemeArgsconfigurationsheettile {
  border: AwsQuicksightThemeArgsconfigurationsheettileborder;
}
export interface AwsQuicksightThemeArgsconfigurationsheetTileLayoutgutter {
  show?: boolean;
}
export interface AwsQuicksightThemeArgsconfigurationsheetTileLayoutmargin {
  show?: boolean;
}
export interface AwsQuicksightThemeArgsconfigurationsheetTileLayout {
  gutter: AwsQuicksightThemeArgsconfigurationsheetTileLayoutgutter;
  margin: AwsQuicksightThemeArgsconfigurationsheetTileLayoutmargin;
}
export interface AwsQuicksightThemeArgsconfigurationsheet {
  tile: AwsQuicksightThemeArgsconfigurationsheettile;
  tile_layout: AwsQuicksightThemeArgsconfigurationsheetTileLayout;
}
export interface AwsQuicksightThemeArgsconfigurationtypographyFontFamilies {
  font_family?: string;
}
export interface AwsQuicksightThemeArgsconfigurationtypography {
  font_families: AwsQuicksightThemeArgsconfigurationtypographyFontFamilies;
}
export interface AwsQuicksightThemeArgsconfigurationUiColorPalette {
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
export interface AwsQuicksightThemeArgsconfiguration {
  data_color_palette: AwsQuicksightThemeArgsconfigurationDataColorPalette;
  sheet: AwsQuicksightThemeArgsconfigurationsheet;
  typography: AwsQuicksightThemeArgsconfigurationtypography;
  ui_color_palette: AwsQuicksightThemeArgsconfigurationUiColorPalette;
}
export interface AwsQuicksightThemeArgspermissions {
  actions: string[];
  principal: string;
}
export interface AwsQuicksightThemeArgstimeouts {
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
  configuration: AwsQuicksightThemeArgsconfiguration;
  permissions: AwsQuicksightThemeArgspermissions;
  timeouts: AwsQuicksightThemeArgstimeouts;
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