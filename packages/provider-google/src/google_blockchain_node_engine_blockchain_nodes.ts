import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetailsGethDetails {
  garbage_collection_mode?: string;
}
export interface GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetailsValidatorConfig {
  mev_relay_urls?: string[];
}
export interface GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetails {
  api_enable_admin?: boolean;
  api_enable_debug?: boolean;
  consensus_client?: string;
  execution_client?: string;
  network?: string;
  node_type?: string;
  geth_details: GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetailsGethDetails;
  validator_config: GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetailsValidatorConfig;
}
export interface GoogleBlockchainNodeEngineBlockchainNodesArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBlockchainNodeEngineBlockchainNodesArgs {
  blockchain_node_id: string;
  blockchain_type?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  ethereum_details: GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetails;
  timeouts?: GoogleBlockchainNodeEngineBlockchainNodesArgsTimeouts;
}
export class google_blockchain_node_engine_blockchain_nodes extends TerraformResource {
  readonly connection_info!: any[];
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBlockchainNodeEngineBlockchainNodesArgs) {
    super(config, "resource", args, resourceName, "google_blockchain_node_engine_blockchain_nodes");
  }
}