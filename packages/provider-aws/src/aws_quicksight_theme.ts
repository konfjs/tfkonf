import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsQuicksightThemeArgsConfigurationDataColorPalette {
  colors?: string[];
  empty_fill_color?: string;
  min_max_gradient?: string[];
}
export interface AwsQuicksightThemeArgsConfigurationSheetTileBorder {
  show?: boolean;
}
export interface AwsQuicksightThemeArgsConfigurationSheetTile {
  border: AwsQuicksightThemeArgsConfigurationSheetTileBorder;
}
export interface AwsQuicksightThemeArgsConfigurationSheetTileLayoutGutter {
  show?: boolean;
}
export interface AwsQuicksightThemeArgsConfigurationSheetTileLayoutMargin {
  show?: boolean;
}
export interface AwsQuicksightThemeArgsConfigurationSheetTileLayout {
  gutter: AwsQuicksightThemeArgsConfigurationSheetTileLayoutGutter;
  margin: AwsQuicksightThemeArgsConfigurationSheetTileLayoutMargin;
}
export interface AwsQuicksightThemeArgsConfigurationSheet {
  tile: AwsQuicksightThemeArgsConfigurationSheetTile;
  tile_layout: AwsQuicksightThemeArgsConfigurationSheetTileLayout;
}
export interface AwsQuicksightThemeArgsConfigurationTypographyFontFamilies {
  font_family?: string;
}
export interface AwsQuicksightThemeArgsConfigurationTypography {
  font_families: AwsQuicksightThemeArgsConfigurationTypographyFontFamilies;
}
export interface AwsQuicksightThemeArgsConfigurationUiColorPalette {
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
export interface AwsQuicksightThemeArgsConfiguration {
  data_color_palette: AwsQuicksightThemeArgsConfigurationDataColorPalette;
  sheet: AwsQuicksightThemeArgsConfigurationSheet;
  typography: AwsQuicksightThemeArgsConfigurationTypography;
  ui_color_palette: AwsQuicksightThemeArgsConfigurationUiColorPalette;
}
export interface AwsQuicksightThemeArgsPermissions {
  actions: string[];
  principal: string;
}
export interface AwsQuicksightThemeArgsTimeouts {
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
  configuration: AwsQuicksightThemeArgsConfiguration;
  permissions: AwsQuicksightThemeArgsPermissions;
  timeouts?: AwsQuicksightThemeArgsTimeouts;
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