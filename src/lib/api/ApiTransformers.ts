import {
    isDMChannel,
    isGuildBasedChannelByGuildKey,
    isNewsChannel,
    isTextChannel,
    isThreadChannel,
    isVoiceChannel
} from '@sapphire/discord.js-utilities';
import type {
    Channel,
    ChannelType,
    DMChannel,
    Guild,
    GuildChannel,
    GuildMember,
    NewsChannel,
    PermissionOverwrites,
    Role,
    TextChannel,
    ThreadChannel,
    ThreadChannelType,
    User,
    VoiceChannel
} from 'discord.js';

// #region Guild