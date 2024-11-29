import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePubsubLiteTopicArgsPartitionConfigcapacity {
  publish_mib_per_sec: number;
  subscribe_mib_per_sec: number;
}
export interface GooglePubsubLiteTopicArgsPartitionConfig {
  count: number;
  capacity: GooglePubsubLiteTopicArgsPartitionConfigcapacity;
}
export interface GooglePubsubLiteTopicArgsReservationConfig {
  throughput_reservation?: string;
}
export interface GooglePubsubLiteTopicArgsRetentionConfig {
  per_partition_bytes: string;
  period?: string;
}
export interface GooglePubsubLiteTopicArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePubsubLiteTopicArgs {
  name: string;
  region?: string;
  zone?: string;
  partition_config: GooglePubsubLiteTopicArgsPartitionConfig;
  reservation_config: GooglePubsubLiteTopicArgsReservationConfig;
  retention_config: GooglePubsubLiteTopicArgsRetentionConfig;
  timeouts: GooglePubsubLiteTopicArgstimeouts;
}
export class google_pubsub_lite_topic extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubLiteTopicArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_lite_topic");
  }
}