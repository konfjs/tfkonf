import { TerraformConfig, TerraformResource } from "tfs";
export interface AgentCreationConfig {
  business?: string;
  default_language_code: string;
  location?: string;
  time_zone: string;
}
export interface ChatEngineConfig {
  dialogflow_agent_to_link?: string;
  agent_creation_config: AgentCreationConfig;
}
export interface CommonConfig {
  company_name?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDiscoveryEngineChatEngineArgs {
  collection_id: string;
  data_store_ids: string[];
  display_name: string;
  engine_id: string;
  industry_vertical?: string;
  location: string;
  chat_engine_config: ChatEngineConfig;
  common_config: CommonConfig;
  timeouts: Timeouts;
}
export class google_discovery_engine_chat_engine extends TerraformResource {
  readonly chat_engine_metadata!: any[];
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDiscoveryEngineChatEngineArgs) {
    super(config, "resource", args, resourceName, "google_discovery_engine_chat_engine");
  }
}