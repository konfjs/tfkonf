import { TerraformConfig, TerraformResource } from "tfs";
export interface LayoutBasedChunkingConfig {
  chunk_size?: number;
  include_ancestor_headings?: boolean;
}
export interface ChunkingConfig {
  layout_based_chunking_config: LayoutBasedChunkingConfig;
}
export interface DigitalParsingConfig {}
export interface LayoutParsingConfig {}
export interface OcrParsingConfig {
  use_native_text?: boolean;
}
export interface DefaultParsingConfig {
  digital_parsing_config: DigitalParsingConfig;
  layout_parsing_config: LayoutParsingConfig;
  ocr_parsing_config: OcrParsingConfig;
}
export interface DigitalParsingConfig {}
export interface LayoutParsingConfig {}
export interface OcrParsingConfig {
  use_native_text?: boolean;
}
export interface ParsingConfigOverrides {
  file_type: string;
  digital_parsing_config: DigitalParsingConfig;
  layout_parsing_config: LayoutParsingConfig;
  ocr_parsing_config: OcrParsingConfig;
}
export interface DocumentProcessingConfig {
  chunking_config: ChunkingConfig;
  default_parsing_config: DefaultParsingConfig;
  parsing_config_overrides: ParsingConfigOverrides;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDiscoveryEngineDataStoreArgs {
  content_config: string;
  create_advanced_site_search?: boolean;
  data_store_id: string;
  display_name: string;
  industry_vertical: string;
  location: string;
  skip_default_schema_creation?: boolean;
  solution_types?: string[];
  document_processing_config: DocumentProcessingConfig;
  timeouts: Timeouts;
}
export class google_discovery_engine_data_store extends TerraformResource {
  readonly create_time!: string;
  readonly default_schema_id!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDiscoveryEngineDataStoreArgs) {
    super(config, "resource", args, resourceName, "google_discovery_engine_data_store");
  }
}