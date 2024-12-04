import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleManagedKafkaTopicArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleManagedKafkaTopicArgs {
  cluster: string;
  configs?: { [key: string]: string };
  location: string;
  partition_count?: number;
  replication_factor: number;
  topic_id: string;
  timeouts?: GoogleManagedKafkaTopicArgsTimeouts;
}

export class google_managed_kafka_topic extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleManagedKafkaTopicArgs) {
    super(config, "resource", args, resourceName, "google_managed_kafka_topic");
  }
}
